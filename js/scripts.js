$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const sentenceInput = $("input#your-sentence").val();
    const sentenceArray = sentenceInput.split(" ");
    console.log(sentenceArray);
    let outputSentence = new Array();

    
    sentenceArray.forEach(function(element) {
      if (element.length >= 3) {
        outputSentence.push(element);
      }
    });
    const reversed = outputSentence.reverse();

    console.log(reversed);

//    let outputString = reversed.join(" ");
    $(".output").text(reversed.join(" "));
  });
});