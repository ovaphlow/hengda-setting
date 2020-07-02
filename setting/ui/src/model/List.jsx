import React, { useEffect, useState } from 'react';

import IconRename from '../icon/Rename';

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await window.fetch('/api/common/model/');
      const res = await response.json();
      setData(res.content);
    })();
  }, []);

  return (
    <>
      <h2>车型</h2>
      <hr />

      <div className="row">
        <div className="col">
          <a href="#/新增" className="btn btn-sm btn-outline-success">
            <i className="fa fa-fw fa-plus" />
            新增
          </a>
        </div>

        <div className="col">
          <div className="btn-group float-right">
            <a href="#/" className="btn btn-sm btn-outline-secondary">
              <i className="fa fa-fw fa-list" />
              列表
            </a>
          </div>
        </div>
      </div>

      <div className="card shadow mt-2">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th className="text-right">序号</th>
                <th>名称</th>
                <th>备注</th>
              </tr>
            </thead>

            <tbody>
              {data.map((it) => (
                <tr key={it.id}>
                  <td className="text-right">
                    <a href={`#/${it.id}`} className="float-left">
                      <IconRename />
                    </a>

                    {it.id}
                  </td>
                  <td>{it.v}</td>
                  <td>{it.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
