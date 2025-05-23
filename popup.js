document.getElementById("summarize").addEventListener("click",()=>{

    const result = document.getElementById("result")

    result.textContent = "Extracting Text...";

    chrome.tabs.query({ active:true , currentWindow:true} , ([tab])=>{
        chrome.tabs.sendMessage(
            tab.id,
            {type:"GET_ARTICLE_TEXT"} , 
            ({ text }) => {
                result.textContent = text ? text.slice(0, 300)+ "...": "No Article Text Found.";
            }
        );
    });
});