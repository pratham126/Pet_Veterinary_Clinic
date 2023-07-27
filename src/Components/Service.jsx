import React from 'react';

const Service = (props) => {
  return (
    <div id="service">
      <h2 className="srv-h">
        {props.services[0].price ? 'Our Services' : 'All Customers'}
      </h2>
      <section className="service-section">
        <ul
          style={{
            listStyleType: 'none',
            paddingInline: '3px',
            alignContent: 'center',
          }}
        >
          <li className="service-li">
            <table>
              <tbody>
                <tr>
                  <th>
                    {props.services[0].price ? (
                      <span className="table-txt">Service</span>
                    ) : (
                      <span className="table-txt">Pet-name</span>
                    )}
                  </th>
                  <th>
                    {props.services[0].price ? (
                      <span className="table-txt">Service name</span>
                    ) : (
                      <span className="table-txt">Customer name</span>
                    )}
                  </th>
                  <th>
                    {props.services[0].price ? (
                      <span className="table-txt">Price</span>
                    ) : (
                      <span className="table-txt">Customer email</span>
                    )}
                  </th>
                </tr>
              </tbody>
            </table>
          </li>
          {props.services &&
            props.services.map(
              (srv) =>
              ((srv.email && srv.email.toLowerCase() !== 'admin@gmail.com') || !srv.email) && (
                  <li className="service-li" key={srv.id}>
                    <table>
                      <tbody>
                        <tr>
                          {srv.img ? (
                            <td>
                              <img
                                className="service-img"
                                src={srv.img}
                                alt={srv.name}
                              />
                            </td>
                          ) : (
                            <td>
                              <span className="table-txt">{srv.petName}</span>
                            </td>
                          )}
                          <td>
                            <span className="table-txt">{srv.name}</span>
                          </td>
                          {srv.price ? (
                            <td>
                              <span className="table-txt">${srv.price}</span>
                            </td>
                          ) : (
                            <td>
                              <span className="table-txt">{srv.email}</span>
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </li>
                )
            )}
        </ul>
      </section>
    </div>
  );
};

export default Service;
