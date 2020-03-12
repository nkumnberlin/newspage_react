import React from 'react';
import {Drawer, DrawerHeader, DrawerTitle, DrawerContent} from '@rmwc/drawer';
import {List, ListItem} from '@rmwc/list';
import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';


const NewsList = (sources,selectNewsPage) => (
    <>
        {!!sources.length && <List>
            {sources.map((key, index) =>
                <React.Fragment key={index}>
                    <ListItem onClick={() =>selectNewsPage(key.id)}>{key.name}
                    </ListItem>
                </React.Fragment>
            )}
        </List>
        }
    </>
);

const RenderNavBar = ({sources, selectNewsPage, showSideBar, hideSideBar}) => {

    return (
        <Drawer hideSideBar={hideSideBar} dismissible open={showSideBar}>
            <DrawerHeader>
                <DrawerTitle>List of Newspages</DrawerTitle>
            </DrawerHeader>
            <DrawerContent>
                {NewsList(sources,selectNewsPage)}
            </DrawerContent>
        </Drawer>
    );
};

export default RenderNavBar;
