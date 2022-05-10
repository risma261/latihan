import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import LoadingSvg from "./LoadingSvg";

const defaultValue = [
  {
    id: uuidv4(),
    nama: "Yoga",
    umur: 22,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Ria",
    umur: 19,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Fahmi",
    umur: 25,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Lala",
    umur: 21,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Ivan",
    umur: 25,
    jenisKelamin: "Pria",
  },
];

const getQueryPassenger = gql `
query ambilPassenger {
  passenger {
    id
    nama
    umur
    jenis_kelamin
  }
}
`;

const getPassengerById = gql `
  query MyQuery3($_eq: uuid = "") {
    passenger(where: {id: {_eq: $_eq}}) {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;

const UpdatePassenger = gql`
mutation MyMutation($id: uuid = "") {
  update_passenger_by_pk(pk_columns: {id: $id}, _set: {umur: "22"}) {
    id
  }
}
`

const InsertPassenger = gql`
mutation MyMutation2($jenis_kelamin: String = "", $nama:String, $umur:numeric) {
  insert_passenger(objects: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
    returning {
      id
      nama
      umur
      jenis_kelamin
    }
  }
}
`

const DeletePassenger = gql`
mutation MyMutation3($id: uuid!) {
  delete_passenger_by_pk(id: $id) {
    id
  }
}
`

function Home() {
  const [getPassenger, {data:dataQuery, loading, error}] = useLazyQuery(getQueryPassenger);
  // const [getPassenger, {data:dataquery, loading, error}] = useLazyQuery(getPassengerById);
  const [PassengerId, setPassengerId] = useState(0);
  const [updatePassenger, { loading: loadingUpdate}] = useMutation(UpdatePassenger)
  const [insertPassenger, { loading: loadingInsert, data:dataInserted}] = useMutation(InsertPassenger, {
    refetchQueries: getPassengerById
  })
  const [deletePassenger, { loading: loadingDelete}] = useMutation(DeletePassenger, {
    refetchQueries: getPassengerById
  })
  const [data, setData] = useState(defaultValue);


  useEffect(() =>{
    getPassenger({})
  },[])
  
  useEffect(() =>{
    if(!loading){
      console.log(dataQuery)
    }
  },[dataQuery,loading])
  
  // console.log(dataQuery);
  // console.log(dataQuery?.passenger);
  // console.log("data", data);
  
  const editPassenger = (idx) => {
    updatePassenger({variables: {
      id: idx
    }})
  };
  
  const hapusPengunjung = (idx) => {
    deletePassenger({
      variables:{
        id: idx
      }
    })
  };
  
  const tambahPengunjung = (newUser) => {
    const newPassenger = {
      id: uuidv4(),
      nama: newUser.nama,
      umur: newUser.umur,
      jenis_kelamin: newUser.jenisKelamin,
    }; 
    insertPassenger({
      variables:{
        ...newPassenger
      }
    })
    
    setData([newPassenger]);
  };
  
  
  
  const onGetData = () => {
    getPassenger({
      variables:{
        _eq: PassengerId, 
      }
    })
    setData(setPassengerId?.passenger);
  }
  
  
  const onChangePassengerId = (e) => {
    if(e.target){
      setPassengerId(e.target.value)
    }
  }
  
  useEffect(()=>{
    console.log(dataInserted)
  },[dataInserted])
  
  if(loading || loadingUpdate  || loadingInsert || loadingDelete) {
    <LoadingSvg />;
  }

  if(error) {
    console.log(error)
    return null
  }

  return (
    <div>
      <input value={PassengerId} onChange={onChangePassengerId} />
      <button onClick={onGetData}>Get Data</button>
      <Header />
      <ListPassenger data={dataQuery?.passenger} hapusPengunjung={hapusPengunjung} />
      <PassengerInput tambahPengunjung={tambahPengunjung} />  
    </div>
  );
}

export default Home;
