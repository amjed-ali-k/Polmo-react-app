import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fileDownload from 'js-file-download'
import {ToastContainer, toast} from 'react-toastify';
import FileDrop from 'react-dropzone';


import {
    Container,
    Row,
    Col, Media
} from '../../components';

import {HeaderMain} from "../components/HeaderMain";

import FilesList from './FilesList';
import FilesGrid from './FilesGrid';
import {FilesLeftNav} from "../components/Files/FilesLeftNav";
import {ProjectsSmHeader} from "../components/Projects/ProjectsSmHeader";
import httpservice from "../../services/httpservice";
import config from "../../config"
import classNames from "classnames";
import numeral from "numeral";
import moment from "moment";

const audio = [
    "audio/flac",
    "audio/mpegurl",
    "audio/mpegurl",
    "audio/mp4",
    "audio/mp4",
    "audio/mpeg",
    "audio/ogg",
    "audio/ogg",
    "audio/x-scpls",
    "audio/wav",
    "audio/aac"
]
const video = [
    "application/vnd.apple.mpegurl",
    "application/x-mpegurl",
    "video/3gpp",
    "video/mp4",
    "video/mpeg",
    "video/ogg",
    "video/quicktime",
    "video/webm",
    "video/x-m4v",
    "video/ms-asf",
    "video/x-ms-wmv",
    "video/x-msvideo",
]
const document = [
    "application/x-abiword",
    "application/x-freearc",
    "application/vnd.amazon.ebook",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/epub+zip",
    "text/html",
    "text/calendar",
    "application/json",
    "application/ld+json",
    "application/vnd.oasis.opendocument.presentation",
    "application/vnd.oasis.opendocument.spreadsheet",
    "application/vnd.oasis.opendocument.text",
    "application/pdf",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
]
const photos = [
    "image/bmp",
    "image/gif",
    "image/vnd.microsoft.icon",
    "image/png",
    "image/svg+xml",
    "application/x-shockwave-flash",
    "image/tiff",
    "image/webp"
]
// eslint-disable-next-line react/prop-types
const contentDefault = (message, title, icon = 'check') => (
    <Media>
        <Media middle left className="mr-3">
            <i className={`fa fa-fw fa-2x fa-${icon}`}/>
        </Media>
        <Media body>
            <Media heading className="font-weight-bold" tag="h6">{title}!</Media>
            <p>{message}</p>
        </Media>
    </Media>
);

class Files extends Component {
    state = {
        files: [],
        current_directory: 'root',
        files_in_cd: [],
        paging: {
            total_pages: 1,
            current_page: 1,
            item_in_one_page: 15
        },
        filterType: 'all',
        tags: [],
        clipboard: '',
        upload: {
            show: false,
            isOver: false,
            file: null
        }
    }

    async componentDidMount() {
        await this.updateFiles();
        this.changeFolder('root');
    }

    updateFiles = async () => {
        // Fetch File and Folder List from DB
        const res = await httpservice.get(config.apiEndpoint + '/files/me/');
        let st = {...this.state};
        st.files = res.data;
        // Extract tags from the files list.
        const tags = new Set();
        st.files.forEach((v) => {
            v.tags.forEach(tag => tags.add(tag))
        })
        st.tags = Array.from(tags);
        this.setState(st);
    }

    changeFolder = (folderkey, filterType = 'all') => {
        if (this.isFolder(folderkey)) {
            let st = {...this.state}
            st.current_directory = folderkey
            st.files_in_cd = this.state.files.filter(file => file.parent === folderkey)
            // eslint-disable-next-line no-mixed-operators
            st.files_in_cd.sort((a, b) => a.type > b.type && -1 || 1) // Sort Folders first and Files second
            st.paging.total_pages = Math.floor(st.files_in_cd.length / st.paging.item_in_one_page) + 1 // Calculate Total Pages when changing folder
            st.filterType = filterType

            this.setState(st)

        }
    }

    changePage = (pagenumber) => {
        let st = {...this.state}
        st.paging.current_page = pagenumber;
        this.setState(st);
    }

    isFolder = (folderkey) => {
        if (folderkey === 'root') {
            return true
        } else {
            const r = this.state.files.find(o => o.key === folderkey);
            return r.type === 'folder';
        }
    }

    updatePagination = (st) => {
        st.paging.total_pages = Math.floor(st.files_in_cd.length / st.paging.item_in_one_page) + 1 // Calculate Total Pages when changing folder
        return st
    }

    filterFiles = (filter = 'all', tag = null) => {
        let st = {...this.state};
        if (tag) {
            st.files_in_cd = this.state.files.filter(file => file.tags.includes(tag));
            st = this.updatePagination(st);
            st.filterType = '';
            this.setState(st);
            return true;
        }
        let contentTypes = [];

        switch (filter) {
            case 'audio':
                contentTypes = audio;
                break;
            case 'video':
                contentTypes = video;
                break;
            case 'document':
                contentTypes = document;
                break;
            case 'image':
                contentTypes = photos;
                break;
            case 'folder':
                st.files_in_cd = this.state.files.filter(file => file.type === 'folder');
                st.filterType = filter;
                st = this.updatePagination(st);
                this.setState(st);
                return true;
            case 'file':
                st.files_in_cd = this.state.files.filter(file => file.type === 'file');
                st.filterType = filter;
                st = this.updatePagination(st);
                this.setState(st);
                return true;
            default:
                this.changeFolder('root', 'all');
                return true;
        }
        st.files_in_cd = this.state.files.filter(file => contentTypes.includes(file.content_type));
        st.filterType = filter;
        st = this.updatePagination(st);
        this.setState(st);


    }

    getcurrentTree = () => {
        let tree = []
        let dir = this.state.current_directory

        if (dir === 'root') {
            tree.push({folderName: 'home', key: 'root'})
        } else {
            while (dir !== 'root') {
                // eslint-disable-next-line no-loop-func
                let r = this.state.files.find(o => o.key === dir);
                tree.push({folderName: r.name, key: r.key})
                dir = r.parent
            }
            tree.push({folderName: 'home', key: 'root'})
        }
        return tree.reverse()
    }

    newFolder = () => {
    }

    editFile = (key) => {
    }

    copyFile = (key) => {
        let st = {...this.state};
        st.clipboard = key;
        this.setState(st);
    }

    pasteFile = async (destinaton_key) => {

    }

    uploadFile = () => {
        const st = {...this.state};
        st.upload.show = true;
        this.setState(st);
    }

    _filesDropped = async (file) => {
        let st = {...this.state};
        st.upload.file = file[0];
        this.setState(st);
        // Upload file here
        await httpservice.post(config.apiEndpoint + '/file/upload?title=' + st.upload.file.name + '&parent=' + st.current_directory + '&size=' + st.upload.file.size)
        this.sendAlerts(`File ${st.upload.file.name} is uploaded successfully!`, 'Upload Success')
        await this.updateFiles()
        st = {...this.state};
        st.upload.file = null;
        st.upload.show = false;
        this.setState(st);


    }

    downloadFile = async (key) => {
        const r = this.state.files.find(o => o.key === key);
        this.sendAlerts('The file you requested is downloading in the background. Your browser will ask to Open/Save when downloading is finished.',
            'Download started')
        await httpservice.get(r.link, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, r.filename)
            })

    }

    deleteFile = async (key) => {

    }

    sendAlerts = (message, title, icon) => {
        toast.success(() => contentDefault(message, title, icon));
    }

    render() {
        const {isOver, file} = this.state.upload;
        const dropzoneClass = classNames({
            'dropzone--active': isOver
        }, 'dropzone');
        const upload_file = (<FileDrop
            multiple={false}
            // onDragEnter={() => { this.setState({isOver: true}) }}
            // onDragLeave={() => { this.setState({isOver: false}) }}
            onDrop={this._filesDropped}
        >
            {
                ({getRootProps, getInputProps}) => (
                    <div {...getRootProps()} className={dropzoneClass}>
                        {file? <i className="fa fa-circle-o-notch fa-spin fa-fw fa-3x mb-3"/> : <i className="fa fa-cloud-upload fa-fw fa-3x mb-3"/>}
                        {file? <h5 className='mt-0'>Uploading...</h5> : <h5 className='mt-0'>Upload Files</h5>}
                        {!file && <p>Drag a file here or <span className='text-primary'>browse</span> for a file to upload.</p>}
                        {!file && <p className="small">JPG, GIF, PNG, MOV, and AVI. Please choose files under 5MB for upload.</p>}
                        {file && <p className="small">{file.name} | {numeral(file.size).format('0.00a')}B | { moment(file.modifiedDate).format('DD-MMM-YYYY, HH:mm') }</p>}
                        <input {...getInputProps()} />
                    </div>
                )
            }

        </FileDrop>)

        return (
            <React.Fragment>
                <Container>
                    <HeaderMain
                        title="Files"
                        className="mb-5 mt-4"
                    />
                    <Row>
                        <Col lg={3}>
                            <FilesLeftNav filter={this.filterFiles} selected={this.state.filterType}
                                          tags={this.state.tags}/>
                        </Col>
                        <Col lg={9}>
                            <ProjectsSmHeader
                                subTitle={this.props.match.params.type === "list" ? "Files List" : "Files Grid"}
                                linkList="/files/list"
                                linkGrid="/files/grid"
                                tree={this.getcurrentTree()}
                                click={this.changeFolder}
                                upload={this.uploadFile}
                            />
                            {this.state.upload.show ? upload_file : <></>}

                            {
                                this.props.match.params.type === "list" ?
                                    <FilesList file_list={this.state.files_in_cd}
                                               paging={this.state.paging}
                                               directory={this.state.current_directory}
                                               changePage={this.changePage}
                                               changeFolder={this.changeFolder}
                                               edit={this.editFile}
                                               download={this.downloadFile}
                                               copy={this.copyFile}
                                               delete={this.deleteFile}

                                    /> :
                                    <FilesGrid file_list={this.state.files_in_cd}
                                               paging={this.state.paging}
                                               directory={this.state.current_directory}
                                               changePage={this.changePage}
                                               changeFolder={this.changeFolder}
                                               edit={this.editFile}
                                               download={this.downloadFile}
                                               copy={this.copyFile}
                                               delete={this.deleteFile}
                                    />
                            }
                        </Col>
                    </Row>
                    <ToastContainer
                        position='top-right'
                        autoClose={5000}
                        draggable={false}
                        hideProgressBar={true}
                    />
                </Container>
            </React.Fragment>
        );
    }

}

Files.propTypes = {
    match: PropTypes.object.isRequired
};


export default Files;