import { useEffect } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Delete() {

    const { id } = useParams();

    const navigate = useNavigate();

    const onDelete = async (e) => {
        try{
            const token = localStorage.getItem("token");
            
            await axios.delete(
                `http://localhost:2000/post/delete/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        onDelete();
    }, []);

    return (
        <div>

        </div>
    );
}