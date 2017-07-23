<script>
		var imgs = document.getElementById('imgs').getElementsByTagName('img');
		var slide=function(i){
		
		  return function(e){
			//imgs[i].style.display='none';
			shuiyin('output',imgs[i].src);	
			
		  }
		};
		
		for(i=0;i<imgs.length;i++){
		  imgs[i].onclick=slide(i);
		}
	

		function shuiyin(canvasid,imgurl,addtext){
			var img = new Image();
			img.src = imgurl;	
			img.onload = function(){				
				var canvas = document.getElementById(canvasid);
				var ctx = canvas.getContext("2d");
				canvas.width = img.width;
				canvas.height = img.height;
				var w = canvas.width;
				var h = canvas.height;
				

				ctx.drawImage(img,0,0,w,h);
				ctx.font = "80px  Microsoft YaHei";
				ctx.fillStyle = "rgba(252,255,255,0.8)";

				
				document.getElementById("shuiyinBtn").onclick = function(){
				var addtext = document.getElementById("shuiyinText").value;
				
				
				

				
				var text_w,text_h,text_l,text_fs
				text_l = addtext.length; //��J����
				text_fs = w/(text_l+2)  //�r��j�p�ץ�
				text_h = h*0.95;		//���Ϥ�����������
				text_w = (w/2)- (text_l/2)*text_fs; //��r�m��
				
				


				ctx.font = text_fs+"px  Microsoft YaHei";//�Y�ɭץ��r��j�p
				ctx.fillText(addtext,text_w,text_h); //��ܦ�m
				
				}
			}
		}
</script>			
	
