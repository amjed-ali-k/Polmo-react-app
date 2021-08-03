import React from 'react';

import { 
    Card,
    CardFooter,
    Table
} from '../../components';

import { Paginations } from "../components/Paginations";
import { TrTableFilesList } from "./components/TrTableFilesList";

const FilesList = (props) => (
        <Card className="mb-3">
            { /* START Table */}
            <div className="table-responsive-xl">
                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th className="align-middle bt-0">Directory</th>
                            <th className="align-middle bt-0">Last Change</th>
                            <th className="align-middle bt-0">Tags</th>
                            <th className="align-middle bt-0 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    { props.file_list.slice((props.paging.current_page*props.paging.item_in_one_page)-props.paging.item_in_one_page, (props.paging.current_page*props.paging.item_in_one_page)).map((file, index) => {
                        return <TrTableFilesList
                            file={file}
                            key={index}
                            click={() => {props.changeFolder(file.key)}}
                            edit={() => {props.edit(file.key)}}
                            download={() => {props.download(file.key)}}
                            copy={() => {props.copy(file.key)}}
                            delete={() => {props.delete(file.key)}}
                        />
                    })}
                    </tbody>
                </Table>
            </div>
            { /* END Table */}
            <CardFooter className="d-flex justify-content-center pb-0">
                <Paginations paging={props.paging} changePage={props.changePage} />
            </CardFooter>
        </Card>
);

export default FilesList;