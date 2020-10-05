let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";let score=0;function answerQuestion(e){let s=!1;$(e+" .answers li").on("click",function(){s||(s=!0,$(this).parent().addClass("clicked"),"true"==this.dataset.correct?($(this).addClass("correct"),score++,$(e+" .quiz-responses .correct-response").slideDown(200)):"false"==this.dataset.correct&&($(this).addClass("incorrect"),$(e+" .quiz-responses .incorrect-response").slideDown(200)),$(e+" .quiz-responses .response-explanation").slideDown(200),$(e+" .answers li").addClass("no-hover"),console.log("answers: "+$(".answers").length),console.log("answers clicked: "+$(".answers.clicked").length),$(".answers").length==$(".answers.clicked").length&&($(".quiz-results").slideDown(200),$("#quiz-score").html(score),0==score||1==score||2==score||3==score||4==score||5==score?$("#quiz-advice").html("Here are some resources to help you learn more."):6==score||7==score?$("#quiz-advice").html("Good job! Here are some resources to help you learn even more."):8==score||9==score?$("#quiz-advice").html("Great job! You know your stuff, but here are some resources to help you learn even more."):10==score&&$("#quiz-advice").html("Perfect! You know your stuff, but here are some resources to help you learn even more.")))})}$(".answers").one("mouseover",function(){answerQuestion("#"+$(this).parent().attr("id"))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0Iiwic2NvcmUiLCJhbnN3ZXJRdWVzdGlvbiIsInF1ZXN0aW9uQ29udGFpbmVyIiwiYW5zd2VyTG9ja2VkIiwiJCIsIm9uIiwidGhpcyIsInBhcmVudCIsImFkZENsYXNzIiwiZGF0YXNldCIsImNvcnJlY3QiLCJzbGlkZURvd24iLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsIm9uZSIsImF0dHIiXSwibWFwcGluZ3MiOiJBQVFBLElBQUFBLFFBQUFDLFNBQUFDLHVCQUFBLGlCQUNBQyxTQUFBRixTQUFBRyxlQUFBLGNBQ0EsSUFBQUQsU0FDQSxJQUFBLElBQUFFLEVBQUEsRUFBQUEsRUFBQUwsUUFBQU0sT0FBQUQsSUFDQUwsUUFBQUssR0FBQUUsTUFBQUMsV0FBQSxNQXFFQSxJQUFBQyxNQUFBLEVBRUEsU0FBQUMsZUFBQUMsR0FDQSxJQUFBQyxHQUFBLEVBRUFDLEVBQUFGLEVBQUEsZ0JBQUFHLEdBQUEsUUFBQSxXQUNBRixJQUdBQSxHQUFBLEVBRUFDLEVBQUFFLE1BQUFDLFNBQUFDLFNBQUEsV0FFQSxRQUFBRixLQUFBRyxRQUFBQyxTQUNBTixFQUFBRSxNQUFBRSxTQUFBLFdBQ0FSLFFBQ0FJLEVBQUFGLEVBQUEsc0NBQUFTLFVBQUEsTUFDQSxTQUFBTCxLQUFBRyxRQUFBQyxVQUNBTixFQUFBRSxNQUFBRSxTQUFBLGFBQ0FKLEVBQUFGLEVBQUEsd0NBQUFTLFVBQUEsTUFHQVAsRUFBQUYsRUFBQSwwQ0FBQVMsVUFBQSxLQUVBUCxFQUFBRixFQUFBLGdCQUFBTSxTQUFBLFlBRUFJLFFBQUFDLElBQUEsWUFBQVQsRUFBQSxZQUFBUCxRQUNBZSxRQUFBQyxJQUFBLG9CQUFBVCxFQUFBLG9CQUFBUCxRQUdBTyxFQUFBLFlBQUFQLFFBQUFPLEVBQUEsb0JBQUFQLFNBQ0FPLEVBQUEsaUJBQUFPLFVBQUEsS0FDQVAsRUFBQSxlQUFBVSxLQUFBZCxPQUVBLEdBQUFBLE9BQUEsR0FBQUEsT0FBQSxHQUFBQSxPQUFBLEdBQUFBLE9BQUEsR0FBQUEsT0FBQSxHQUFBQSxNQUNBSSxFQUFBLGdCQUFBVSxLQUFBLG1EQUNBLEdBQUFkLE9BQUEsR0FBQUEsTUFDQUksRUFBQSxnQkFBQVUsS0FBQSxrRUFDQSxHQUFBZCxPQUFBLEdBQUFBLE1BQ0FJLEVBQUEsZ0JBQUFVLEtBQUEsNEZBQ0EsSUFBQWQsT0FDQUksRUFBQSxnQkFBQVUsS0FBQSw4RkFPQVYsRUFBQSxZQUFBVyxJQUFBLFlBQUEsV0FFQWQsZUFBQSxJQURBRyxFQUFBRSxNQUFBQyxTQUFBUyxLQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XG5cbi8vIGJvbGRzIHRoZSBzdWJoZWFkIGlmIHRoZXJlIGlzIG5vIGhlYWRsaW5lXG5sZXQgc3ViaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1zdWJoZWFkXCIpLFxuICAgIGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1oZWFkXCIpO1xuICAgIGlmICghaGVhZGxpbmUpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN1YmhlYWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1YmhlYWRbaV0uc3R5bGUuZm9udFdlaWdodCA9IFwiNjAwXCI7XG4gICAgICAgIH0gICAgICAgXG4gICAgIH1cblxuXG4vLyBjb25zdCBteVF1aXogPSBbXG4vLyAgICAge1xuLy8gICAgICdxJzogJ0Egc2FtcGxlIHF1ZXN0aW9uIDE/Jyxcbi8vICAgICAnb3B0aW9ucyc6IFtcbi8vICAgICAgICAgJ0Fuc3dlciAxJyxcbi8vICAgICAgICAgJ0Fuc3dlciAyJyxcbi8vICAgICAgICAgJ0Fuc3dlciAzJyxcbi8vICAgICAgICAgJ0Fuc3dlciA0J1xuLy8gICAgIF0sXG4vLyAgICAgJ2NvcnJlY3RJbmRleCc6IDEsXG4vLyAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gY29ycmVjdCByZXNwb25zZS4nLFxuLy8gICAgICdpbmNvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gaW5jb3JyZWN0IHJlc3BvbnNlLidcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAncSc6ICdBIHNhbXBsZSBxdWVzdGlvbiAyPycsXG4vLyAgICAgJ29wdGlvbnMnOiBbXG4vLyAgICAgICAgICdBbnN3ZXIgMScsXG4vLyAgICAgICAgICdBbnN3ZXIgMidcbi8vICAgICBdLFxuLy8gICAgICdjb3JyZWN0SW5kZXgnOiAxLFxuLy8gICAgICdjb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGNvcnJlY3QgcmVzcG9uc2UuJyxcbi8vICAgICAnaW5jb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGluY29ycmVjdCByZXNwb25zZS4nXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgJ3EnOiAnQSBzbWFwbGUgcXVlc3Rpb24gMz8nLFxuLy8gICAgICdvcHRpb25zJzogW1xuLy8gICAgICAgICAnQW5zd2VyIDEnLFxuLy8gICAgICAgICAnQW5zd2VyIDInLFxuLy8gICAgICAgICAnQW5zd2VyIDMnLFxuLy8gICAgICAgICAnQW5zd2VyIDQnXG4vLyAgICAgXSxcbi8vICAgICAnY29ycmVjdEluZGV4JzogMixcbi8vICAgICAnY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBjb3JyZWN0IHJlc3BvbnNlLicsXG4vLyAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBpbmNvcnJlY3QgcmVzcG9uc2UuJ1xuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICdxJzogJ0Egc21hcGxlIHF1ZXN0aW9uIDQ/Jyxcbi8vICAgICAnb3B0aW9ucyc6IFtcbi8vICAgICAgICAgJ0Fuc3dlciAxJyxcbi8vICAgICAgICAgJ0Fuc3dlciAyJ1xuLy8gICAgIF0sXG4vLyAgICAgJ2NvcnJlY3RJbmRleCc6IDEsXG4vLyAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gY29ycmVjdCByZXNwb25zZS4nLFxuLy8gICAgICdpbmNvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gaW5jb3JyZWN0IHJlc3BvbnNlLidcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAncSc6ICdBIHNtYXBsZSBxdWVzdGlvbiA1PycsXG4vLyAgICAgJ29wdGlvbnMnOiBbXG4vLyAgICAgICAgICdBbnN3ZXIgMScsXG4vLyAgICAgICAgICdBbnN3ZXIgMicsXG4vLyAgICAgICAgICdBbnN3ZXIgMycsXG4vLyAgICAgICAgICdBbnN3ZXIgNCdcbi8vICAgICBdLFxuLy8gICAgICdjb3JyZWN0SW5kZXgnOiAzLFxuLy8gICAgICdjb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGNvcnJlY3QgcmVzcG9uc2UuJyxcbi8vICAgICAnaW5jb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGluY29ycmVjdCByZXNwb25zZS4nXG4vLyAgICAgfVxuLy8gXVxuXG4vLyAkKCcjcXVpeicpLnF1aXooe1xuLy8gICAgIHF1ZXN0aW9uczogbXlRdWl6LFxuLy8gICAgIGNvdW50ZXJGb3JtYXQ6ICdRdWVzdGlvbiAlY3VycmVudCBvZiAldG90YWwnXG4vLyB9KTtcblxubGV0IHNjb3JlID0gMDsgLy90b3RhbCBzY29yZSBmb3IgZmluYWwgcmVzdWx0c1xuXG5mdW5jdGlvbiBhbnN3ZXJRdWVzdGlvbihxdWVzdGlvbkNvbnRhaW5lcikge1xuICAgIGxldCBhbnN3ZXJMb2NrZWQgPSBmYWxzZSAvL2NvbnRyb2xzIHdoZXRoZXIgdGhlIHF1ZXN0aW9uIHNob3VsZCBiZSBsb2NrZWQgYWZ0ZXIgYW5zd2VyaW5nXG5cbiAgICAkKHF1ZXN0aW9uQ29udGFpbmVyICsgJyAuYW5zd2VycyBsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChhbnN3ZXJMb2NrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhbnN3ZXJMb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJjbGlja2VkXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGFzZXQuY29ycmVjdCA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBzY29yZSsrO1xuICAgICAgICAgICAgJChxdWVzdGlvbkNvbnRhaW5lciArICcgLnF1aXotcmVzcG9uc2VzIC5jb3JyZWN0LXJlc3BvbnNlJykuc2xpZGVEb3duKDIwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhc2V0LmNvcnJlY3QgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgJChxdWVzdGlvbkNvbnRhaW5lciArICcgLnF1aXotcmVzcG9uc2VzIC5pbmNvcnJlY3QtcmVzcG9uc2UnKS5zbGlkZURvd24oMjAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQocXVlc3Rpb25Db250YWluZXIgKyAnIC5xdWl6LXJlc3BvbnNlcyAucmVzcG9uc2UtZXhwbGFuYXRpb24nKS5zbGlkZURvd24oMjAwKTtcblxuICAgICAgICAkKHF1ZXN0aW9uQ29udGFpbmVyICsgJyAuYW5zd2VycyBsaScpLmFkZENsYXNzKCduby1ob3ZlcicpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbnN3ZXJzOiAnICsgJChcIi5hbnN3ZXJzXCIpLmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2coJ2Fuc3dlcnMgY2xpY2tlZDogJyArICQoXCIuYW5zd2Vycy5jbGlja2VkXCIpLmxlbmd0aClcblxuICAgICAgICAvLyBzaG93cyAnc2VlIHJlc3VsdHMnIGJ1dHRvbiBhZnRlciBhbGwgZml2ZSBxdWVzdGlvbnMgaGF2ZSBiZWVuIGFuc3dlcmVkXG4gICAgICAgIGlmICgkKFwiLmFuc3dlcnNcIikubGVuZ3RoID09ICQoXCIuYW5zd2Vycy5jbGlja2VkXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLnF1aXotcmVzdWx0cycpLnNsaWRlRG93bigyMDApO1xuICAgICAgICAgICAgJCgnI3F1aXotc2NvcmUnKS5odG1sKHNjb3JlKTtcblxuICAgICAgICAgICAgaWYgKHNjb3JlID09IDAgfHwgc2NvcmUgPT0gMSB8fCBzY29yZSA9PSAyIHx8IHNjb3JlID09IDMgfHwgc2NvcmUgPT0gNCB8fCBzY29yZSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgJCgnI3F1aXotYWR2aWNlJykuaHRtbChcIkhlcmUgYXJlIHNvbWUgcmVzb3VyY2VzIHRvIGhlbHAgeW91IGxlYXJuIG1vcmUuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSA9PSA2IHx8IHNjb3JlID09IDcpIHtcbiAgICAgICAgICAgICAgICAkKCcjcXVpei1hZHZpY2UnKS5odG1sKFwiR29vZCBqb2IhIEhlcmUgYXJlIHNvbWUgcmVzb3VyY2VzIHRvIGhlbHAgeW91IGxlYXJuIGV2ZW4gbW9yZS5cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID09IDggfHwgc2NvcmUgPT0gOSkge1xuICAgICAgICAgICAgICAgICQoJyNxdWl6LWFkdmljZScpLmh0bWwoXCJHcmVhdCBqb2IhIFlvdSBrbm93IHlvdXIgc3R1ZmYsIGJ1dCBoZXJlIGFyZSBzb21lIHJlc291cmNlcyB0byBoZWxwIHlvdSBsZWFybiBldmVuIG1vcmUuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSA9PSAxMCkge1xuICAgICAgICAgICAgICAgICQoJyNxdWl6LWFkdmljZScpLmh0bWwoXCJQZXJmZWN0ISBZb3Uga25vdyB5b3VyIHN0dWZmLCBidXQgaGVyZSBhcmUgc29tZSByZXNvdXJjZXMgdG8gaGVscCB5b3UgbGVhcm4gZXZlbiBtb3JlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuJCgnLmFuc3dlcnMnKS5vbmUoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgbGV0IHBhcmVudERpdiA9ICgkKHRoaXMpLnBhcmVudCgpLmF0dHIoJ2lkJykpXG4gICAgYW5zd2VyUXVlc3Rpb24oJyMnICsgcGFyZW50RGl2KTtcbn0pXG4gICAgXG4iXX0=