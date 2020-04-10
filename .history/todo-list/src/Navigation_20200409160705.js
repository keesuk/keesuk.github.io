import React from 'react';
const Navigation = ({ links }) => (
  <div>
    <ul>
      {links.map(link => (
        <li key={link.to}>
          <a href={link.to}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);
export default Navigation;