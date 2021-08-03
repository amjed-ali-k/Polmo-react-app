import React from 'react';
import faker from 'faker/locale/en_US';

import { 
    Badge,
    Avatar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    AvatarAddOn,
    Media,
    DropdownItem
} from '../../../components';

import { randomArray, randomAvatar } from '../../../utilities';
import moment from "moment";

const badges = [
    "secondary"
];

const status = [
    "success",
    "danger",
    "warning",
    "secondary"
];

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
const TrTableFilesList = (props) => (
    <React.Fragment>
        <tr>
            <td className="align-middle" style={{cursor: 'pointer'}} onClick={props.click}>
                <Media>
                    <Media left middle>
                        <i className={`fa fa-fw fa-${props.file.type}-o fa-3x mr-2`}/>
                    </Media>
                    <Media body>
                        <div className="text-inverse">
                            {  props.file.title? props.file.title: props.file.name }
                        </div>
                        <span>
                            { formatBytes(props.file.size) }
                        </span>
                    </Media>
                </Media>
            </td>
            <td className="align-middle">
                {moment(props.file.updatedDate? props.file.updatedDate : props.file.createdDate).format('dddd, D, M, YYYY')}<br />
                {moment(props.file.updatedDate? props.file.updatedDate : props.file.createdDate).format('h:mm A')}
            </td>
            <td className="align-middle">
                {props.file.tags.map((badge) => {return <Badge color="primary" className="text-capitalize mr-1" pill> {badge}</Badge>} )}

            </td>
            <td className="align-middle text-right">
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link">
                        <i className="fa fa-gear" /><i className="fa fa-angle-down ml-2" />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem className={props.file.type === 'folder' ? 'd-none': ''} onClick={props.download}>
                            <i className="fa fa-fw fa-download mr-2"/>
                            Download
                        </DropdownItem>
                        <DropdownItem onClick={props.delete}>
                            <i className="fa fa-fw fa-trash mr-2"/>
                            Delete
                        </DropdownItem>
                        <DropdownItem onClick={props.edit}>
                            <i className="fa fa-fw fa-pencil mr-2"/>
                            Edit
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={props.copy}>
                            <i className="fa fa-fw fa-files-o mr-2"/>
                            Copy
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </td>
        </tr>
    </React.Fragment>
)

export { TrTableFilesList };
