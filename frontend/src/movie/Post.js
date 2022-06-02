import React, { useState } from 'react'
import { Form, Button, Dropdown, Container, Row, Col, Pagination } from 'react-bootstrap'
import DisplayMovie from './DisplayMovie'
import ReactPaginate from 'react-paginate';

const Post = ({ data, paginate, page, setCurrentPage, currentPage, PreviousButton, NextButton }) => {


    const pageNumber = [];
    const tot = page
    console.log("tot", tot)

    for (let i = 1; i <= tot; i++) {
        pageNumber.push(i);
    }
    const handlepageClick = (data1) => {
        setCurrentPage(data1.selected + 1)
    }
    return (
        <div>
            <div className='grid'>
                {
                    data.map((mov) => <DisplayMovie key={mov.id} {...mov} />)
                }
            </div>
            {/* <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                        <Button variant="primary" disabled={currentPage === pageNumber[0] ? true : false} onClick={PreviousButton}>Previous</Button>
                    </li>
                    {
                        pageNumber.map(number => (
                            <div key={number}>
                                <li onClick={() => paginate(number)} style={{ cursor: "pointer" }}  id={number} className={currentPage === number ? "active page-item" : null}>
                                    <a className="page-link" >{number}</a>
                                </li>
                            </div>
                        ))
                    }
                    <li className="page-item">

                        <Button variant="primary" disabled={currentPage === pageNumber[pageNumber.length - 1] ? true : false} onClick={NextButton}>Next</Button>
                    </li>
                </ul>
            </nav> */}
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                pageCount={tot}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                containerClassName={'pagination'}
                onPageChange={handlepageClick}
            />
        </div>
    )
}

export default Post
