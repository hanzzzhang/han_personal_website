import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Introduction from './views/Introduction'
import Projects from './views/Projects'
import Experience from './views/Experience'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    console.log('hello')
    return (
        <div className="App">
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: '740px',
                    padding: '0 10px',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Introduction />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/experience" element={<Experience />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    )
}

export default App
