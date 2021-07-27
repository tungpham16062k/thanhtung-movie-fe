import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import personApi from '../../../../api/personApi';
import Loading from '../../../../components/Loading';
import PersonInfo from '../../components/PersonInfo';


const Main = (props) => {
    const { slug } = props.match.params;
    const [person, setPerson] = useState({});
    const history = useHistory();

    const getPerson = async (slug) => {
        try {
            const response = await personApi.getBySlug(slug);
            const data = { ...response };
            if (!Object.keys(data).length) {
                history.push('/404');
            }
            setPerson(data);
        } catch (error) {
            console.log('Error');
            history.push('/404');
        }
    };

    useEffect(() => {
        getPerson(slug);
    }, [slug])

    return (
        <div className="content" >
            {/* <PersonInfo /> */}
            {Object.keys(person).length ? (<PersonInfo data={person} />) : (<Loading />)}
        </div >
    );
}

export default Main;