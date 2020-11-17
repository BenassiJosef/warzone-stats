import React from "react";
import { Box ,DataTable,Meter,Text} from "grommet";

function DataTableGrommet({playerData}) {


 function* objectValues(datas){
    let response = datas
    let array = [];
        for (var key in response) {
        array.push(response[key]);
        }
    yield array
}

let arr;
try {
    arr = objectValues(playerData).next().value.map(el =>{
      return ({
        name: el.data.platformInfo.platformUserIdentifier,
        percent: el.data.segments[1].stats.kdRatio.percentile
        })
      })
}
catch (err) {
    console.log( err );
}

  return (
    
<DataTable
  columns={[
    {
      property: 'name',
      header: <Text>Name</Text>,
      primary: true,
    },
    {
      property: 'percent',
      header: 'KD',
      render: datum => (
        <Box pad={{ vertical: 'xsmall' }}>
          <Meter
            values={[{ value: datum.percent }]}
            thickness="small"
            size="small"
          />
        </Box>
      ),
    },
  ]}
  data={arr}
/>
  );
}

export default DataTableGrommet;
