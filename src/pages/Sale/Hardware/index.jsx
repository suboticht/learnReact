import React, { useEffect, useState } from 'react';
import { fetchHardwares } from '../../../api';
import Popup from '../../../components/Popup';
import FormEdit from './FormEdit';
import List from './List';
import Search from './Search';

export default function HardWare() {
  const [hardwares, setHardwares] = useState();
  const [hardware, selectHardware] = useState();
  const [search, changeSearch] = useState();
  const [isOpenPopupEdit, openPopupEdit] = useState(false);

  const getHardwares = async (params) => {
    try {
      const { data } = await fetchHardwares(params);
      setHardwares(data);
    } catch {
      // handle error...
    }
  };

  useEffect(() => {
    (async () => {
      await getHardwares();
    })();
  }, [search]);

  return (
    <>
      <Search changeSearch={changeSearch} />
      <List hardwares={hardwares} selectHardware={selectHardware} openPopupEdit={openPopupEdit} />
      <Popup open={isOpenPopupEdit}>
        <FormEdit hardware={hardware} />
      </Popup>
    </>
  );
}
