import { Injectable, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class CommonService {

    mostPopularObj: any = {
        mostPopularData: [
            { id: '1', title: 'YouTube Thumbnail', img: '/assets/images/canvas/youtube.jpg' },
            { id: '2', title: 'Instagram Post', img: '/assets/images/canvas/instagram.jpg' },
            { id: '3', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-1.jpg' },
            { id: '4', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-2.jpg' },
            { id: '5', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-3.jpg' },
            { id: '6', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-11.jpg' },
            { id: '7', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-5.jpg' },
            { id: '8', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-6.jpg' },
            { id: '9', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-7.jpg' },
            { id: '10', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-13.jpg' },
            { id: '11', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-9.jpg' },

            { id: '12', title: 'YouTube Thumbnail', img: '/assets/images/canvas/youtube.jpg' },
            { id: '13', title: 'Instagram Post', img: '/assets/images/canvas/instagram.jpg' },
            { id: '14', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-1.jpg' },
            { id: '15', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-2.jpg' },
            { id: '16', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-3.jpg' },
            { id: '17', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-11.jpg' },
            { id: '18', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-5.jpg' },
            { id: '19', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-6.jpg' },
            { id: '20', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-7.jpg' },
            { id: '21', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-13.jpg' },
            { id: '22', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-9.jpg' },
            { id: '20', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-10.jpg' },

            { id: '21', title: 'YouTube Thumbnail', img: '/assets/images/canvas/youtube.jpg' },
            { id: '22', title: 'Instagram Post', img: '/assets/images/canvas/instagram.jpg' },
            { id: '23', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-1.jpg' },
            { id: '24', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-2.jpg' },
            { id: '25', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-3.jpg' },
            { id: '26', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-11.jpg' },
            { id: '27', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-5.jpg' },
            { id: '28', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-6.jpg' },
            { id: '29', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-7.jpg' },
            { id: '30', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-13.jpg' },
            { id: '31', title: 'YouTube Thumbnail', img: '/assets/images/thumbnails/editor-image-9.jpg' },
            { id: '32', title: 'Instagram Post', img: '/assets/images/thumbnails/editor-image-10.jpg' },
        ]
    }



    loadPopularList(): any {
        if (this.mostPopularObj) {
            return Observable.of(this.mostPopularObj);
        }
    }
}