import { useContext } from 'react';

import dataContext from '../Context';

import './app-info.scss';

const AppInfo = () => {
  const { data } = useContext(dataContext);

  return (
    <header className="app-info">
      <h1 className="app-info__title">Учет сотрудников в компании Test</h1>
      <div className="app-info__total">
        Общее число сотрудников: <span>{data.length}</span>
      </div>
      <div className="app-info__award">
        Премию получают:{' '}
        <span>{data.filter(({ increase }) => increase).length}</span>
      </div>
    </header>
  );
};

export default AppInfo;
