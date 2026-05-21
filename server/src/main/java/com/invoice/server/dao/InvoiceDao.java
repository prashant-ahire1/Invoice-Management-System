package com.invoice.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.invoice.server.model.Invoice;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceDao extends JpaRepository<Invoice, Long> {
    
}
