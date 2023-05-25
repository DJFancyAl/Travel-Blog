import { useParams } from 'react-router-dom';

function EditBlog() {
    const {id} = useParams()

    return (
        <div>Edit Blog ID: {id}</div>
    )
}

export default EditBlog