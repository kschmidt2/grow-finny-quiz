let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";function answerQuestion(e){let t=$(".question-container"),s=!1,n="";for(i=0;i<t.length;i++)console.log(t);console.log(e),$(e+" .answers li a").on("click",function(){s||(s=!0,"true"==this.dataset.correct?($(this).addClass("correct"),0,n="That's correct!"):"false"==this.dataset.correct&&($(this).addClass("incorrect"),n="Too bad!"),$(e+" .quiz-controls").html(n).slideDown(200))})}$(".answers").one("mouseover",function(){answerQuestion("#"+$(this).parent().attr("id"))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiYW5zd2VyUXVlc3Rpb24iLCJxdWVzdGlvbkNvbnRhaW5lciIsInF1ZXN0aW9ucyIsIiQiLCJhbnN3ZXJMb2NrZWQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJvbiIsInRoaXMiLCJkYXRhc2V0IiwiY29ycmVjdCIsImFkZENsYXNzIiwic2NvcmUiLCJodG1sIiwic2xpZGVEb3duIiwib25lIiwicGFyZW50IiwiYXR0ciJdLCJtYXBwaW5ncyI6IkFBUUEsSUFBQUEsUUFBQUMsU0FBQUMsdUJBQUEsaUJBQ0FDLFNBQUFGLFNBQUFHLGVBQUEsY0FDQSxJQUFBRCxTQUNBLElBQUEsSUFBQUUsRUFBQSxFQUFBQSxFQUFBTCxRQUFBTSxPQUFBRCxJQUNBTCxRQUFBSyxHQUFBRSxNQUFBQyxXQUFBLE1BcUVBLFNBQUFDLGVBQUFDLEdBQ0EsSUFBQUMsRUFBQUMsRUFBQSx1QkFFQUMsR0FBQSxFQUNBQyxFQUFBLEdBSUEsSUFBQVQsRUFBQSxFQUFBQSxFQUFBTSxFQUFBTCxPQUFBRCxJQUNBVSxRQUFBQyxJQUFBTCxHQUVBSSxRQUFBQyxJQUFBTixHQUVBRSxFQUFBRixFQUFBLGtCQUFBTyxHQUFBLFFBQUEsV0FDQUosSUFHQUEsR0FBQSxFQUNBLFFBQUFLLEtBQUFDLFFBQUFDLFNBQ0FSLEVBQUFNLE1BQUFHLFNBQUEsV0FDQUMsRUFDQVIsRUFoQkEsbUJBaUJBLFNBQUFJLEtBQUFDLFFBQUFDLFVBQ0FSLEVBQUFNLE1BQUFHLFNBQUEsYUFDQVAsRUFsQkEsWUFxQkFGLEVBQUFGLEVBQUEsbUJBQUFhLEtBQUFULEdBQUFVLFVBQUEsUUFLQVosRUFBQSxZQUFBYSxJQUFBLFlBQUEsV0FFQWhCLGVBQUEsSUFEQUcsRUFBQU0sTUFBQVEsU0FBQUMsS0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRkcyBzb2NpYWwgY2xhc3MgdG8gZ2V0IHNvY2lhbCBjaGFydFxuLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbi8vIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKVxuLy8ge1xuLy8gICAgIGVsZW1lbnRbaV0uY2xhc3NOYW1lICs9IFwiIHNvY2lhbFwiO1xuLy8gfVxuXG4vLyBib2xkcyB0aGUgc3ViaGVhZCBpZiB0aGVyZSBpcyBubyBoZWFkbGluZVxubGV0IHN1YmhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtc3ViaGVhZFwiKSxcbiAgICBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtaGVhZFwiKTtcbiAgICBpZiAoIWhlYWRsaW5lKSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdWJoZWFkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdWJoZWFkW2ldLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiO1xuICAgICAgICB9ICAgICAgIFxuICAgICB9XG5cblxuLy8gY29uc3QgbXlRdWl6ID0gW1xuLy8gICAgIHtcbi8vICAgICAncSc6ICdBIHNhbXBsZSBxdWVzdGlvbiAxPycsXG4vLyAgICAgJ29wdGlvbnMnOiBbXG4vLyAgICAgICAgICdBbnN3ZXIgMScsXG4vLyAgICAgICAgICdBbnN3ZXIgMicsXG4vLyAgICAgICAgICdBbnN3ZXIgMycsXG4vLyAgICAgICAgICdBbnN3ZXIgNCdcbi8vICAgICBdLFxuLy8gICAgICdjb3JyZWN0SW5kZXgnOiAxLFxuLy8gICAgICdjb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGNvcnJlY3QgcmVzcG9uc2UuJyxcbi8vICAgICAnaW5jb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGluY29ycmVjdCByZXNwb25zZS4nXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgJ3EnOiAnQSBzYW1wbGUgcXVlc3Rpb24gMj8nLFxuLy8gICAgICdvcHRpb25zJzogW1xuLy8gICAgICAgICAnQW5zd2VyIDEnLFxuLy8gICAgICAgICAnQW5zd2VyIDInXG4vLyAgICAgXSxcbi8vICAgICAnY29ycmVjdEluZGV4JzogMSxcbi8vICAgICAnY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBjb3JyZWN0IHJlc3BvbnNlLicsXG4vLyAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBpbmNvcnJlY3QgcmVzcG9uc2UuJ1xuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICdxJzogJ0Egc21hcGxlIHF1ZXN0aW9uIDM/Jyxcbi8vICAgICAnb3B0aW9ucyc6IFtcbi8vICAgICAgICAgJ0Fuc3dlciAxJyxcbi8vICAgICAgICAgJ0Fuc3dlciAyJyxcbi8vICAgICAgICAgJ0Fuc3dlciAzJyxcbi8vICAgICAgICAgJ0Fuc3dlciA0J1xuLy8gICAgIF0sXG4vLyAgICAgJ2NvcnJlY3RJbmRleCc6IDIsXG4vLyAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gY29ycmVjdCByZXNwb25zZS4nLFxuLy8gICAgICdpbmNvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gaW5jb3JyZWN0IHJlc3BvbnNlLidcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAncSc6ICdBIHNtYXBsZSBxdWVzdGlvbiA0PycsXG4vLyAgICAgJ29wdGlvbnMnOiBbXG4vLyAgICAgICAgICdBbnN3ZXIgMScsXG4vLyAgICAgICAgICdBbnN3ZXIgMidcbi8vICAgICBdLFxuLy8gICAgICdjb3JyZWN0SW5kZXgnOiAxLFxuLy8gICAgICdjb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGNvcnJlY3QgcmVzcG9uc2UuJyxcbi8vICAgICAnaW5jb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGluY29ycmVjdCByZXNwb25zZS4nXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgJ3EnOiAnQSBzbWFwbGUgcXVlc3Rpb24gNT8nLFxuLy8gICAgICdvcHRpb25zJzogW1xuLy8gICAgICAgICAnQW5zd2VyIDEnLFxuLy8gICAgICAgICAnQW5zd2VyIDInLFxuLy8gICAgICAgICAnQW5zd2VyIDMnLFxuLy8gICAgICAgICAnQW5zd2VyIDQnXG4vLyAgICAgXSxcbi8vICAgICAnY29ycmVjdEluZGV4JzogMyxcbi8vICAgICAnY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBjb3JyZWN0IHJlc3BvbnNlLicsXG4vLyAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBpbmNvcnJlY3QgcmVzcG9uc2UuJ1xuLy8gICAgIH1cbi8vIF1cblxuLy8gJCgnI3F1aXonKS5xdWl6KHtcbi8vICAgICBxdWVzdGlvbnM6IG15UXVpeixcbi8vICAgICBjb3VudGVyRm9ybWF0OiAnUXVlc3Rpb24gJWN1cnJlbnQgb2YgJXRvdGFsJ1xuLy8gfSk7XG5cbmZ1bmN0aW9uIGFuc3dlclF1ZXN0aW9uKHF1ZXN0aW9uQ29udGFpbmVyKSB7XG4gICAgbGV0IHF1ZXN0aW9ucyA9ICQoJy5xdWVzdGlvbi1jb250YWluZXInKSxcbiAgICAgICAgc2NvcmUgPSAwLFxuICAgICAgICBhbnN3ZXJMb2NrZWQgPSBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2UgPSAnJyxcbiAgICAgICAgY29ycmVjdFJlc3BvbnNlID0gJ1RoYXRcXCdzIGNvcnJlY3QhJyxcbiAgICAgICAgaW5jb3JyZWN0UmVzcG9uc2UgPSAnVG9vIGJhZCEnO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uQ29udGFpbmVyKTtcblxuICAgICQocXVlc3Rpb25Db250YWluZXIgKyAnIC5hbnN3ZXJzIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoYW5zd2VyTG9ja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIGFuc3dlckxvY2tlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmRhdGFzZXQuY29ycmVjdCA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBzY29yZSsrO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBjb3JyZWN0UmVzcG9uc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhc2V0LmNvcnJlY3QgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBpbmNvcnJlY3RSZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgICQocXVlc3Rpb25Db250YWluZXIgKyAnIC5xdWl6LWNvbnRyb2xzJykuaHRtbChyZXNwb25zZSkuc2xpZGVEb3duKDIwMCk7XG4gICAgfSlcblxufVxuXG4kKCcuYW5zd2VycycpLm9uZSgnbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICBsZXQgcGFyZW50RGl2ID0gKCQodGhpcykucGFyZW50KCkuYXR0cignaWQnKSlcbiAgICBhbnN3ZXJRdWVzdGlvbignIycgKyBwYXJlbnREaXYpO1xufSlcblxuICAgIFxuIl19