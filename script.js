<!-- JavaScript -->
  <script>
    document.getElementById('comment-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value.trim();

      if (commentText !== '') {
        const commentDisplay = document.getElementById('comments-display');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentDisplay.appendChild(newComment);
        commentInput.value = '';
      }
    });
  </script>
