export let addBlogFormTemplate = `
    <form name="add-blog-form" class="add-blog-form">
       <label>
            Title
            <input id="title" name="title" type="text">
        </label>
        <label>
            Author
            <input id="author" name="author" type="text">
        </label>
        <textarea name="text"></textarea>
        <input type="submit" class="send-blog-button" value="Add Blog"/>
    </form>
`;
