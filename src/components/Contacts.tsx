import { Avatar, List } from 'antd';
import React from 'react';

const Contacts = () => {
    return (
        <List>
            <List.Item>
                <a href="https://github.com/KrisPrymak"
                    target="_blank" rel="noreferrer">
                        <List.Item.Meta title='Github' avatar={<Avatar src='https://cdn-icons-png.flaticon.com/512/4926/4926625.png'/>}>
                        </List.Item.Meta>
                    </a>
            </List.Item>
            <List.Item>
                <a href="https://t.me/krispriimak"
                    target="_blank" rel="noreferrer">
                        <List.Item.Meta title='Telegram' avatar={<Avatar src='https://img.icons8.com/?size=1x&id=63306&format=png'/>}>
                        </List.Item.Meta>
                    </a>
            </List.Item>
            <List.Item>
                <a href="https://drive.google.com/file/d/18PTPA6554CHpRmfffuOt9ytSvH0ZegC0/view?usp=sharing"
                    target="_blank" rel="noreferrer">
                        <List.Item.Meta title='CV' avatar={<Avatar src='https://img.icons8.com/?size=512&id=104082&format=png'/>}>
                        </List.Item.Meta>
                    </a>
            </List.Item>
        </List>
    );
};

export default Contacts;