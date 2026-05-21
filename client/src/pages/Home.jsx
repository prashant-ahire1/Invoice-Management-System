import { useEffect, useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import Header from "../components/Header"
import AddInvoices from "../components/AddInvoice"
import Invoices from "../components/Invoices"
import { deleteInvoice, getAllInvoices } from "../service/api"

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);
   const [invoices, setInvoices] = useState([]);

   useEffect(() => {
    const getData = async() => {
        const response = await getAllInvoices();
        response && response.data && setInvoices(response.data);
    }
    getData();
}, [addInvoice]);

  const toggleInvoice = () => {
    setAddInvoice(true);
  }

   const removeInvoice = async (id) => {
    await deleteInvoice(id);

    const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
        setInvoices(updatedInvoices);
   }

  return (
    <>
      <Header />
      <Box style={{ margin: 20 }}>
        <Typography variant="h4"> Pending Invoices</Typography>
        {!addInvoice && <Button
          variant="contained"
          style={{ marginTop: 15 }}
          onClick={() => toggleInvoice()}
          >Add Invoice</Button>
        }
        {addInvoice && <AddInvoices setAddInvoice={setAddInvoice}/> }
        <Box>
          <Invoices invoices={invoices}
           removeInvoice={removeInvoice}
          />
        </Box>
      </Box>
    </>
  )
}

export default Home