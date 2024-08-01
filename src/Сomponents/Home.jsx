import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Flex} from 'antd';

function Home() {
    return (
        <Flex gap="small" wrap >
            <Link to="/login" style={{textDecoration: 'none'}}>
                <Button type="primary">Войти</Button>
            </Link>

            <Link to="/register" style={{textDecoration: 'none'}}>
                <Button type="primary">Регистрация</Button>
            </Link>
        </Flex>
    );
}

export default Home;