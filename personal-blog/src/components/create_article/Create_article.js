import React, {useState} from 'react';
import './Create_article.css'

function CreateArticle(props) {
  const [date, setDate] = useState(null);
  const [img, setImg] = useState({file:null});
  const [title, setTitle] = useState({value:""});  
  const [summary, setSummary] = useState({value:""});  
  const [paragraphOne, setParagraphOne] = useState({value:""});
  const [paragraphTwo, setParagraphTwo] = useState({value:""});
  const [paragraphThree, setParagraphThree] = useState({value:""});
  const [conclusion, setConclusion] = useState({value:""});
  const [subjectMatter, setSubjectMatter] = useState({value:""});
  const [author, setAuthor] = useState({value:""});

  const handleChange = (event) => {
    setImg({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  const handleAuthor = (e) => {
    setAuthor({value: e.target.value});
  }

  const handleSubjectMatter = (e) => {
    setSubjectMatter({value: e.target.value});
  }

  const handleConclusion = (e) => {
    setConclusion({value: e.target.value});
  }

  const handleParagraph3 = (e) => {
    setParagraphThree({value: e.target.value});
  }

  const handleParagraph2 = (e) => {
    setParagraphTwo({value: e.target.value});
  }

  const handleParagraph1 = (e) => {
    setParagraphOne({value: e.target.value});
  }

  const handleSummary = (e) => {
    setSummary({value: e.target.value});
  }

  const handleTitle = (e) => {
    setTitle({value: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    setDate(date);

    props.resentArticle({
      title: title.value,
      date: date,
      summary: summary.value,
      img: img,
      first_paragrapg: paragraphOne.value,
      second_paragrapg: paragraphTwo.value,
      third_paragrapg: paragraphThree.value,
      conclusion: conclusion.value,
      subject_matter: subjectMatter.value,
      author: author.value
    });

    props.submited(true);
  }

  return(
    <section className="create-container">

      <h1 className="create-article-heading">Create New Article</h1>

      <form>
        <label className="create-article-labels" htmlFor="title" >Title</label><br/>
        <input className="create-article-inputs" value={title.value} id="title" name="title" type="text" placeholder="Enter Title Here" onChange={handleTitle} /><br/>

        <label className="create-article-labels" htmlFor="summary" >Article Summary </label><br/>
        <textarea className="create-article-textareas" value={summary.value} id="summary" name="summary" rows="10" cols="100" placeholder="Enter Summary Here" onChange={handleSummary}></textarea><br/>

        <label className="create-article-labels" htmlFor="image" >Select an image</label>
        <input type="file" id="image" name="image" onChange={handleChange} /><br/>
        <img src={img.file}/><br/><br/>

        <label className="create-article-labels" htmlFor="paragraph1" >First Paragraph</label><br/>
        <textarea className="create-article-textareas" value={paragraphOne.value} id="paragraph1" rows="10" cols="100" placeholder="Enter First Paragraph Here" name="paragraphOne" onChange={handleParagraph1}></textarea><br/>

        <label className="create-article-labels" htmlFor="paragraph2" >Second Paragraph</label><br/>
        <textarea className="create-article-textareas" value={paragraphTwo.value} id="paragraph2" rows="10" cols="100" placeholder="Enter Second Paragraph Here" name="paragraphTwo" onChange={handleParagraph2}></textarea><br/>

        <label className="create-article-labels" htmlFor="paragraph3" >Third Paragraph</label><br/>
        <textarea className="create-article-textareas" value={paragraphThree.value} id="paragraph3" rows="10" cols="100" placeholder="Enter Third Paragraph Here" name="paragraphThree" onChange={handleParagraph3}></textarea><br/>

        <label className="create-article-labels" htmlFor="conclusion" >Conclusion</label><br/>
        <textarea className="create-article-textareas" value={conclusion.value} id="conclusion" rows="10" cols="100" placeholder="Enter Conclusion Here" name="conclusion" onChange={handleConclusion}></textarea><br/>

        <label className="create-article-labels" htmlFor="subject" >Subject Matter</label><br/>
        <input className="create-article-inputs" value={subjectMatter.value} id="subject" type="text" placeholder="Enter Subject Matter Here" name="subjectMatter" onChange={handleSubjectMatter}></input><br/>

        <label className="create-article-labels" htmlFor="writer" >Writer's Name</label><br/>
        <input className="create-article-inputs" value={author.value} id="writer" type="text" placeholder="Enter Name of Writer Here" name="author" onChange={handleAuthor}></input><br/>

        <input className="create-article-buttons" type="submit" value="Create" onClick={handleSubmit} />

      </form>
    </section>
  );
}

export default CreateArticle;