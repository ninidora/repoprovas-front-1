import OptionSubject from './optionSubject';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DropSubject() {
  const [subjectReq, setSubjectReq] = useState([]);
  console.log(subjectReq);

  const subject = subjectReq.map((i) => i.name).sort();

  useEffect(
    () => {
      const request = axios.get(`http://localhost:4000/semester/subjects`);

      request.then((response) => {
        setSubjectReq(response.data);
      });
      request.catch((error) => {
        console.log(error);
      });
    },
    //eslint-disable-next-line
    []
  );

  return (
    <>
      {subject.map((i) => (
        <>
          <OptionSubject subject={i} />
        </>
      ))}
    </>
  );
}
