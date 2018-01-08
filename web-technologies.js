function Load()
{
SelectRoom(0);
}

function SelectRoom(storyIndex)
{
	document.getElementById("roomChoices").innerHTML = '';
  document.getElementById("roomTitle").innerHTML = storyArray[storyIndex].title;
  document.getElementById("roomText").innerHTML = storyArray[storyIndex].text;
  for (var i = 0; i < storyArray[storyIndex].choices.length; i++){
    choiceTag = "<button onclick='SelectRoom(" + storyArray[storyIndex].choices[i].index + ")'>" + storyArray[storyIndex].choices[i].text + "</button>";
		  document.getElementById("roomChoices").innerHTML += choiceTag;
  }


}
