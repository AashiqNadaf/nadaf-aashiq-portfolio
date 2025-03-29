import { SendOutlined } from '@ant-design/icons';
import React from 'react';

const AccordionBody: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-0.5">
      {items.length > 0 ? (
        items.map((item, index) => (
          <span
            className="w-full h-auto flex flex-row justify-start items-center gap-2 text-sm font-bold"
            key={index}
          >
            <SendOutlined />{item}
          </span>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default AccordionBody;
