import React from 'react';

const Context = React.createContext({
  isHidden: true,
  vendorAdded: false,
  criteriaAdded: false,
  boxDeleted: false,
  googleDeleted: false,
  dropboxDeleted: false,
  salesDeleted: false,
})

export default Context;