import { gql } from "@apollo/client";

const passengerQuery = gql`
query ambilPassenger {
    passenger {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;

export default passengerQuery;