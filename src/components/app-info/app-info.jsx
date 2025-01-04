import './app-info.scss';

const AppInfo = ({ total, increased }) => {
  return (
    <header className="app-info">
      <h1 className="app-info__title">Учет сотрудников в компании Test</h1>
      <div className="app-info__total">
        Общее число сотрудников: <span>{total}</span>
      </div>
      <div className="app-info__award">
        Премию получают: <span>{increased}</span>
      </div>
    </header>
  );
};

export default AppInfo;
