import React, { useState } from 'react'
import { Form, Button, Dropdown, Container, Row, Col } from 'react-bootstrap'

const Post = ({ data, postperPage, totalPosts, paginate, currentPage, PreviousButton, NextButton }) => {

    const pageNumber = [];
    const tot = Math.ceil(totalPosts / postperPage)
    
    for (let i = 1; i <= tot; i++) {
        pageNumber.push(i);
    }

    console.log("pagenumber", pageNumber)
    
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Color</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Hobbies</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((users, index) => {
                            return (
                                <tr key={users.Id}>
                                    <th>{users.Id}</th>
                                    <td>{users.Firstname}</td>
                                    <td>{users.Lastname}</td>
                                    <td>{users.Email}</td>
                                    <td>{users.Password}</td>
                                    <td>{users.Color}</td>
                                    <td>{users.Gender}</td>
                                    <td>{users.Hobbie.join(",")}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item">
                        <Button variant="primary" disabled={currentPage == pageNumber[0] ? true : false} onClick={PreviousButton}>Previous</Button>
                    </li>
                    {
                        pageNumber.map(number => (
                            <div>
                                <li onClick={() => paginate(number)} style={{ cursor: "pointer" }} key={number} id={number} className={currentPage == number ? "active page-item" : null}>
                                    <a class="page-link" tabindex="-1">{number}</a>
                                </li>
                            </div>
                        ))
                    }
                    <li class="page-item">
                        {/* <a className={currentPage == pageNumber[pageNumber.length - 1] ? "disabled page-item" : null}  onClick={NextButton}>Next</a> */}
                        <Button variant="primary" disabled={currentPage == pageNumber[pageNumber.length - 1] ? true : false} onClick={NextButton}>Next</Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Post
