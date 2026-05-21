import { Box, Typography, TextField , Button, styled } from "@mui/material"
import { useState } from "react"
import { saveInvoice } from "../service/api"

const Component = styled(Box)({
    marginTop: 20,
    '& > p' : {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
})

const defaultObj = {
    vender: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending'
}

// 
const AddInvoice = ({setAddInvoice}) => {
    const [invoice , setInvoice] = useState(defaultObj);

    const onValueChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value })
    }

    const addNewInvoice = async () => {
        await saveInvoice({ ...invoice, amount: Number(invoice['amount']) })

        setAddInvoice(false);
    }
    return(
        <Component>
             <Typography > Add Invoices</Typography>
             <Box>
                <TextField 
                 variant="standard"
                 placeholder="Enter Vender Name"
                onChange={(e) => onValueChange(e)}
                name="vender"
                autoComplete="off"
                />
                <TextField 
                 variant="standard"
                 placeholder="Enter Product Name"
                 onChange={(e) => onValueChange(e)}
                 name="product"
                 autoComplete="off"
                />
                <TextField 
                 variant="standard"
                 placeholder="Enter Amount Name"
                 type="number"
                 onChange={(e) => onValueChange(e)}
                 name="amount"
                 autoComplete="off"
                />
                <TextField 
                 variant="standard"
                 placeholder="Enter Date Name"
                 type="date"
                 onChange={(e) => onValueChange(e)}
                 name="date"
                 autoComplete="off"
                />
                <Button
                 variant="contained"
                 onClick={() => addNewInvoice()}
                >
                    Add Invoice
                </Button>
             </Box>
        </Component>
    )
}  
export default AddInvoice

