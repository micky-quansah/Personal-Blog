import React from 'react';
import './Create_article.css'

function CreateArticle(params) {
  return(
    <section className="create-container">

      <h1 className="create-article-heading">Create New Article</h1>

      <form>
        <label className="create-article-labels" for="title" >Title</label><br/>
        <input className="create-article-inputs" id="title" type="text" placeholder="Enter Title Here"></input><br/>

        <label className="create-article-labels" for="summary" >Article Summary </label><br/>
        <textarea className="create-article-textareas" id="summary" rows="10" cols="100" placeholder="Enter Summary Here"></textarea><br/>

        <label className="create-article-labels" for="image" >Select an image</label>
        <input type="file" id="image" name="image"/><br/><br/><br/>

        <label className="create-article-labels" for="paragraph1" >First Paragraph</label><br/>
        <textarea className="create-article-textareas" id="paragraph1" rows="10" cols="100" placeholder="Enter First Paragraph Here"></textarea><br/>

        <label className="create-article-labels" for="paragraph2" >Second Paragraph</label><br/>
        <textarea className="create-article-textareas" id="paragraph2" rows="10" cols="100" placeholder="Enter Second Paragraph Here"></textarea><br/>

        <label className="create-article-labels" for="paragraph3" >Third Paragraph</label><br/>
        <textarea className="create-article-textareas" id="paragraph3" rows="10" cols="100" placeholder="Enter Third Paragraph Here"></textarea><br/>

        <label className="create-article-labels" for="conclusion" >Conclusion</label><br/>
        <textarea className="create-article-textareas" id="conclusion" rows="10" cols="100" placeholder="Enter Conclusion Here"></textarea><br/>

        <label className="create-article-labels" for="subject" >Subject Matter</label><br/>
        <input className="create-article-inputs" id="subject" type="text" placeholder="Enter Subject Matter Here"></input><br/>

        <label className="create-article-labels" for="writer" >Writer's Name</label><br/>
        <input className="create-article-inputs" id="writer" type="text" placeholder="Enter Name of Writer Here"></input><br/>

        <input className="create-article-buttons" type="submit" value="Submit"/>

      </form>
    </section>
  );
}

export default CreateArticle;