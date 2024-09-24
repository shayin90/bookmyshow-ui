import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movies-list.component.html',
  styles: ``
})
export class MoviesListComponent {
 movies = [
  {
    Title:"Meiyazhagan",
    imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/meiyazhagan-et00405427-1721627107.jpg",
    description: "comedy/Drama",
      },
      {
        Title:"Nandan",
        imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/nandhan-et00410955-1725626073.jpg",
        description: "comedy/Drama",
          },
          {
            Title:"Chelladurai",
            imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kozhipannai-chelladurai-et00411870-1726560826.jpg",
            description: "comedy/Drama",
              },
              {
                Title:"Devara",
                imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devara--part-1-et00310216-1712750637.jpg",
                description: "comedy/Drama",
                  },
                  {
                    Title:"Tambbad",
                    imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tumbbad-et00079092-1726221741.jpg",
                    description: "Horror/comedy/Drama",
                      },
                      {
                        Title:"Kishkindha-kaandam",
                        imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kishkindha-kaandam-et00410024-1726051976.jpg",
                        description: "Horror/comedy/Drama",
                          },
                          {
                            Title:"Vazhai",
                            imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vaazhai-et00408594-1724233930.jpg",
                            description: "Horror/comedy/Drama",
                              },
                              {
                                Title:"Demonte-colony",
                                imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/demonte-colony-2--vengeance-of-the-unholy-et00380018-1723644092.jpg",
                                description: "Horror/comedy/Drama",
                                  },
 ]
}
