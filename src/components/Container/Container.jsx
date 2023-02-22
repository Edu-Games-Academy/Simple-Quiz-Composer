import React, { useState } from 'react';

import Editor from '@/components/Editor';
import TabContainer from '@/components/TabContainer';

function Container() {
  const [value, setValue] = useState('');

  return (
    <div className="ml-64 mt-28 p-4 lg:mt-16">
      <TabContainer tabs={['Rich-text', 'Raw']}>
        <Editor value={value} onChange={setValue} />
        <div className="w-full bg-slate-400">
          <code>{value}</code>
        </div>
      </TabContainer>
    </div>
  );
}

export default Container;
