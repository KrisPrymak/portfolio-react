import { Avatar, Timeline } from 'antd';
import React from 'react';
import { ANTD, BOOTSTRAP, CSS, GIT, HTML, JS, LANG, MUI, REACT, REDUX, SASS, TS } from '../iconConstants';
import './../App.css';
import Title from 'antd/es/typography/Title';

const MainPage = () => {
  // const toolData = [
  //   {src: HTML, children: 'HTML'},
  //   {src: CSS, children: 'CSS'},
  //   {src: SASS, children: 'SASS, BEM'},
  //   {src: BOOTSTRAP, children: 'Bootstrap'},
  //   {src: MUI, children: 'Material-UI'},
  //   {src: ANTD, children: 'Ant Design'},
  //   {src: JS, children: 'JavaScript'},
  //   {src: TS, children: 'TypeScript'},
  //   {src: REACT, children: 'React'},
  //   {src: REDUX, children: 'Redux, Redux Toolkit'},
  //   {src: GIT, children: 'Git, Jira, YouTrack, Scrum'},
  //   {src: LANG, children: 'English, Spanish'},
  // ]
  return (
    <div>
      <div style={{ marginLeft: 20 }}>
      <Title>HI, I'm Kristina Priimak.</Title>
        <Avatar style={{ filter: 'saturate(85%)', marginLeft: 30 }} src={'https://github.com/KrisPrymak/portfolio_react/blob/main/src/media/selfy3.png?raw=true'} size={200} shape='square' />
      </div>
      <h3 style={{ textAlign: 'center' }}>Development stack</h3>
      <Timeline
        mode={'left'}
        style={{ paddingTop: 50 }}
        items={[
          {
            label: <Avatar src={HTML} />,
            children: 'HTML',
          },
          {
            label: <Avatar src={CSS} />,
            children: 'CSS',
          },
          {
            label: <Avatar src={SASS} />,
            children: 'SASS, BEM',
          },
          {
            label: <Avatar src={BOOTSTRAP} />,
            children: 'Bootstrap',
          },
          {
            label: <Avatar src={MUI} />,
            children: 'Material-UI',
          },
          {
            label: <Avatar src={ANTD} />,
            children: 'Ant Design',
          },
          {
            label: <Avatar src={JS} />,
            children: 'JavaScript',
          },
          {
            label: <Avatar src={TS} />,
            children: 'TypeScript',
          },
          {
            label: <Avatar src={REACT} />,
            children: 'React',
          },
          {
            label: <Avatar src={REDUX} />,
            children: 'Redux, Redux Toolkit',
          },
          {
            label: <Avatar src={GIT} />,
            children: 'Git, Jira, YouTrack, Scrum',
          },
          {
            label: <Avatar src={LANG} />,
            children: 'English, Spanish',
          },
        ]}
      />
    </div>
  );
};

export default MainPage;