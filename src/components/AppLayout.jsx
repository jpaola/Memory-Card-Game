import React from "react";
import {Layout} from "antd";
import MemoryGame from "./MemoryGame";

const {Content, Footer} = Layout;

const AppLayout = () => {
	return (
		<Layout className='container'>
			<Layout className='container'>
				<Content className='content'>
					<MemoryGame />
				</Content>
			</Layout>
			<Footer className='footer'>{"Paola Jiron ©2023"}</Footer>
		</Layout>
	);
};

export default AppLayout;
