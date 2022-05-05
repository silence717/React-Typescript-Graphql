import React from 'react';
import {gql, useQuery} from "@apollo/client";
import queryBooksGQ from './graphql/queryBooks.graphql'

const Book = () => {

    const { loading, error, data } = useQuery(queryBooksGQ);

    if (loading) return <div>loading</div>
    if (error) return <div>somthing is error</div>

    return (
        <div style={{ display: 'flex' }}>
            {
                data?.books?.map((book: any, index: number) => (
                    <div key={index}>
                        <h3>{book.title}</h3>
                        <div>{book.author}</div>
                    </div>
                ))
            }
        </div>
    )
};

export default Book;