import React, { useState } from "react";
import { Countries } from "./countries";
console.log("comnmmmmmmmm", Countries);
const SearchFunctionality = () => {
  const [countriesList, setCountriesList] = useState(Countries);
  const [ids, setIds] = useState([]);

  //   const handleChange = (e) => {
  //     debugger
  //     e.preventDefault();
  //     let value = e.target.value;

  // if(value===""){
  //   setCountriesList(Countries)

  // }
  //     const filteredCountries = Countries?.filter((country) => {
  //       return country.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  //     });
  //     setCountriesList([...filteredCountries]);
  //   };
  const handleChange = (e) => {
    e.preventDefault();
    let text = e.target.value;
    const myArray = text.split(",");
    setIds(myArray);
  };
  console.log("idsssssssss", { ids });
  useEffect(async () => {
    setLoading(true);
    let listofIds = [];
    const candyMachineId = new PublicKey(id);
    const candyMachineCreator = await getCandyMachineCreator(candyMachineId);
    let getMintAddressesData = await getMintAddresses(candyMachineCreator[0]);
    for (const item of getMintAddressesData) {
      const tokenMint = item;
      const largestAccounts = await connection.getTokenLargestAccounts(
        new PublicKey(tokenMint)
      );
      const largestAccountInfo = await connection.getParsedAccountInfo(
        largestAccounts?.value[0]?.address
      );
      listofIds.push({ ...largestAccountInfo });
      setLoading(false);
    }
    setCandyMachineReceiverId([...listofIds]);

    // setCandyMachineReceiverId(
    //     (candyMachineReceiverId) =>
    //       candyMachineReceiverId &&
    //       candyMachineReceiverId.concat([Object.values(largestAccountInfo)])
    //   );
  }, []);

  //   useEffect(async () => {
  //     setLoading(true);
  //     let listofIds = [];
  //     const candyMachineId = new PublicKey(id);
  //     const candyMachineCreator = await getCandyMachineCreator(candyMachineId);
  //     let getMintAddressesData = await getMintAddresses(candyMachineCreator[0]);
  //     for (const item of getMintAddressesData) {
  //       const tokenMint = item;
  //       const largestAccounts = await connection.getTokenLargestAccounts(
  //         new PublicKey(tokenMint)
  //       );
  //       const largestAccountInfo = await connection.getParsedAccountInfo(
  //         largestAccounts?.value[0]?.address
  //       );
  //       listofIds.push({ ...largestAccountInfo });
  //       setLoading(false);
  //     }
  //     setCandyMachineReceiverId([...listofIds]);
  //   }, []);

  useEffect(() => {
    if (candyMachineReceiverId?.length > 0) {
      const list = candyMachineReceiverId.slice();
      let idList = list.map((item, i) => {
        return item.value?.data?.parsed?.info?.owner;
      });
      let set = [...new Set(idList)];
      const newData = set.map((item, i) => {
        let length = idList.filter((x) => x === item).length;
        let obj = {
          id: item,
          amount: length,
        };
        return obj;
      });
      setCandyMachineUniquwIds([...newData]);
      setDummyIds([...newData]);
    }
  }, [candyMachineReceiverId]);

  const addWalletID = () => {
    const myArray = text.split(",");
    let data = myArray.map((a) => {
      return {
        id: a,
        amount: 1,
      };
    });
    // setMultiAdd(myArray);
    setAddModal(false);
    // setCandyMachineUniquwIds(
    //   (candyMachineUniquwIds) =>
    //     candyMachineUniquwIds &&
    //     candyMachineUniquwIds.concat({ id: text, amount: 1 })
    // );
    setCandyMachineUniquwIds([...candyMachineUniquwIds, ...data]);
    setDummyIds([...dummyIds, ...data]);

    // setDummyIds(
    //   (dummyIds) =>
    //     dummyIds && dummyIds.concat({ id: text, amount: 1 }, multiAdd)
    // );
  };

  useEffect(async () => {
    setLoading(true);
    let listofIds = [];
    const candyMachineId = new PublicKey(id);
    const candyMachineCreator = await getCandyMachineCreator(candyMachineId);
    let getMintAddressesData = await getMintAddresses(candyMachineCreator[0]);
    for (const item of getMintAddressesData) {
      const tokenMint = item;
      const largestAccounts = await connection.getTokenLargestAccounts(
        new PublicKey(tokenMint)
      );
      const largestAccountInfo = await connection.getParsedAccountInfo(
        largestAccounts?.value[0]?.address
      );
      listofIds.push({ ...largestAccountInfo });
      setLoading(false);
    }
    setCandyMachineReceiverId([...listofIds]);
  }, []);

  return (
    <>
      {/* <h4> Search for countries</h4>
      <input
        type="text"
        name="country"
        onChange={handleChange}
      />
      <div className="list-container">
        <ul className="list">
          {countriesList?.map((countriesname) => {
            return <li>{countriesname.name}</li>;
          })}
        </ul>
      </div> */}

      <div>
        <input
          type="textarea"
          name="textValue"
          onChange={handleChange}
          style={{ height: "200px", width: "600px" }}
        />
        Total Length : {ids.length}
        {ids.map((item, index) => {
          return <div>{item} </div>;
        })}
      </div>
    </>
  );
};
export default SearchFunctionality;
