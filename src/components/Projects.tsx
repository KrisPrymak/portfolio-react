import { FileImageTwoTone } from '@ant-design/icons';
import { Image, List } from 'antd';
import { NavLink } from 'react-router-dom';
import { BOOTSTRAP, CSS, HTML, JS, REACT, REDUX, TS, SASS } from '../iconConstants';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

const SPA = 'SPA'
const JS_NATIVE = 'JS_NATIVE'
const ALL = 'ALL'
const LAYOUT = 'HTML_CSS_LAYOUT'

const data = [
  { filter: SPA, description: 'Проект с использованием фейкового API placeholder. Логика запросов на сервер вынесена в Redux Saga. Интерфейс реализован с помощью Bootstrap.', title: 'Интерфейс отображения постов', tools: [REACT, REDUX, TS, BOOTSTRAP], codeLink: 'https://github.com/KrisPrymak/bootstrap-saga-ts', pageLink: "https://krisprymak.github.io/bootstrap-saga-ts", img: 'https://github.com/KrisPrymak/bootstrap-saga-ts/raw/main/src/media/screenshot.png' },
  { filter: SPA, description: 'Запросы на сервер вынесены в Redux Thunk, интерфейс реализован с помощью Ant Design.', title: 'Интерфейс для отправки и получения сообщений Whatsapp', tools: [HTML, CSS], codeLink: 'https://github.com/KrisPrymak/wa_ga', pageLink: "https://krisprymak.github.io/wa_ga", img: 'https://raw.githubusercontent.com/KrisPrymak/wa_ga/main/src/media/screenshot.png' },
  { filter: JS_NATIVE, description: 'Интерфейс поиска гитхаб репозиториев. Логика реализована на чистом JavaScript', title: 'GitHub Repo Search', tools: [HTML, CSS, JS], href: ' ://ant.design', codeLink: 'https://github.com/KrisPrymak/github_seacrh', pageLink: "https://krisprymak.github.io/github_seacrh", img: 'https://github.com/KrisPrymak/github_seacrh/raw/main/media.png' },
  { filter: JS_NATIVE, description: 'Форма для добавления комментария с возможностью авторизации и указания даты. Блок комментария имеет функционал лайка и удаления.', title: 'Блок с комментариями', tools: [HTML, CSS, JS], codeLink: 'https://github.com/KrisPrymak/form_comment_js', pageLink: "https://krisprymak.github.io/form_comment_js", img: 'https://github.com/KrisPrymak/form_comment_js/raw/main/media.png' },
  { filter: LAYOUT, description: 'Адаптивный лендинг с использованием препоцессора', title: 'Beauty', tools: [HTML, SASS], codeLink: 'https://github.com/KrisPrymak/beauty_layout', pageLink: "https://krisprymak.github.io/beauty_layout", img: 'https://github.com/KrisPrymak/beauty_layout/raw/main/media/Home%20desktop.png' },
  { filter: LAYOUT, description: '', title: 'Star-wars', tools: [HTML, CSS], codeLink: 'https://github.com/KrisPrymak/star-wars', pageLink: "https://krisprymak.github.io/star-wars", img: 'https://github.com/KrisPrymak/star-wars/blob/main/img/screen.png?raw=true' },
]

const projectFilterData: Array<{value: string, name: string}> = [
  { value: ALL, name: 'Все проекты' },
  { value: SPA, name: 'React приложения на TS/JS' },
  { value: JS_NATIVE, name: 'Проекты на нативном JavaScript' },
  { value: LAYOUT, name: 'HTML/CSS верстка' },
]

const Projects = () => {
  const [projectFilter, setProjectFilter] = useState(projectFilterData[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setProjectFilter(projectFilterData.filter(item => item.value === event.target.value)[0]);
  };

  const currentList = projectFilter.value === ALL ? data : data.filter(item => item.filter === projectFilter.value)
  return (
    <div>
      <FormControl style={{ width: '300px' }}>
        <InputLabel id="demo-simple-select-label">Filter projects</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={projectFilter.value}
          label="projectFilter"
          onChange={handleChange}
        >
          {projectFilterData.map(item => {
            return (
              <MenuItem value={item.value}>{item.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <List
        style={{ borderColor: '#000000', paddingTop: 50 }}
        itemLayout="vertical"
        size="large"
        dataSource={currentList}

        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={600}
                alt="logo"
                src={item.img}
              />
            }
          >
            <List.Item.Meta
              avatar={<FileImageTwoTone twoToneColor={'#e6ba38'} />}
              title={<a href={item.href}>{item.title}</a>}
              description={
                <List>
                  <List.Item>
                    <NavLink to={item.codeLink} target='_blank'>Посмотреть код</NavLink>
                    <NavLink to={item.pageLink} target='_blank'>Перейти на сайт</NavLink>
                  </List.Item>
                </List>
              }
            />
            <p>{item.description}</p>
            <div style={{ marginTop: 10 }}>
              {item.tools.map(tool => <Image width={32} src={tool} />)}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Projects;