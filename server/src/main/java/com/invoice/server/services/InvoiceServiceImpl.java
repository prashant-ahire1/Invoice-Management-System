package com.invoice.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.invoice.server.dao.InvoiceDao;
import com.invoice.server.model.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    @Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices() {
        return invoiceDao.findAll();
    }

    @Override
    public Invoice deleteInvoice(long id) {
        Invoice invoice = invoiceDao.findById(id).get();
        invoiceDao.delete(invoice);
        return invoice;
    }
}
