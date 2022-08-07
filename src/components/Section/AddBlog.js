import React from 'react'

export default function AddBlog(props) {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBlog({title, content});
        setTitle('');
        setContent('');
    }

  return (
    <div className="col-md-4 col-md-offset-1 addblog">
            <div className="panel panel-default">
                <h3 className="panel-heading">Add Blog</h3>

                <div className="panel-body">
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <div className="col-md-12">
                                <input type="text" className="form-control" name="title" placeholder="Title" 
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <textarea name="content" className="form-control" cols="30" rows="10" placeholder="Content"
                                value={content}
                                onChange={(e)=>setContent(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block" onClick={handleSubmit}>
                            <i className="fa fa-btn fa-user"></i> Publish
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

