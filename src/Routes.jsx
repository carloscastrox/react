import React from "react";
import { Header } from "./features/layout/components/Header"
import { Main } from "./features/layout/components/Main"
import { Footer } from "./features/layout/components/Footer"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Init } from "./features/products/pages/Init"
import { Articles } from "./features/products/pages/Articles"

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/*layout*/}

            <Header></Header>
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Init></Init>}></Route>
                    <Route path="/Articles" element={<Articles></Articles>}></Route>
                </Routes>
            </section>
            

            { /* Contenido central y rutas*/}

            
        </BrowserRouter>
    )
}