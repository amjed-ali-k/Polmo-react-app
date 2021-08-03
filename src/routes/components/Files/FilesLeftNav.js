import React from 'react';

import { 
    Nav,
    NavItem,
    NavLink,
    Badge
} from './../../../components';

const FilesLeftNav = ({filter, selected, tags}) => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <Nav pills vertical>
                <NavItem>
                    <NavLink style={{cursor: 'pointer'}} onClick={()=> filter('all')} active={selected==='all'}>
                        <i className="fa fa-fw fa-clock-o mr-2"/>
                        All
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor: 'pointer'}} onClick={()=> filter('file')} active={selected==='file'}>
                        <i className="fa fa-fw fa-files-o mr-2"/>
                        All Files
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor: 'pointer'}} onClick={()=> filter('folder')} active={selected==='folder'}>
                        <i className="fa fa-fw fa-folder-o mr-2"/>
                        All Folders
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor: 'pointer'}} onClick={()=> filter('image')} active={selected==='image'}>
                        <i className="fa fa-fw fa-image mr-2"/>
                        Photos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor: 'pointer'}} onClick={()=> filter('audio')} active={selected==='audio'}>
                        <i className="fa fa-fw fa-music mr-2"/>
                        Music
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor: 'pointer'}} onClick={()=> filter('document')} active={selected==='document'}>
                        <i className="fa fa-fw fa-file-pdf-o mr-2"/>
                        Documents
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{cursor: 'pointer'}} onClick={()=> filter('video')} active={selected==='video'}>
                        <i className="fa fa-fw fa-video-camera mr-2"/>
                        Videos
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="small mb-3">
                Tags
            </div>
            <Nav pills vertical>
                {tags.map((t, i)=>{
                    return(
                        <NavItem key={i}>
                            <NavLink style={{cursor: 'pointer'}} onClick={() => filter('', t)} className="d-flex text-capitalize">
                                <i className="fa fa-fw fa-circle text-primary align-self-center mr-2"/>
                                {t}
                            </NavLink>
                        </NavItem>
                    );
                })}

            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { FilesLeftNav };
