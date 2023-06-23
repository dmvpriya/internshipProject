import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetServiceService } from '../get-service.service';
import { DomSanitizer } from '@angular/platform-browser';

// import { RadioButtonModule } from 'primeng/radiobutton';
@Component({
  selector: 'app-pdform',
  templateUrl: './pdform.component.html',
  styleUrls: ['./pdform.component.css']
})
export class PDFormComponent {

  public sampleform:any
  public data:any
  constructor(private formbuilder:FormBuilder,private service:GetServiceService,private _sanitizer: DomSanitizer)
  {
    this.sampleform = this.formbuilder.group({
      firstName: ['', Validators.required, Validators.maxLength(15)],
      lastName: ['', Validators.required,Validators.maxLength(5)],
      phoneNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      yearOfPassing: ['', Validators.required],
      address: ['', Validators.required],
      experiences: ['', Validators.required],
      gender: [''],

      
      // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      //            + toReturnImage.base64string)
    });
  }
  
  fileName = '';
  

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file: File | null = fileInput.files ? fileInput.files[0] : null;
    if (file) {
      this.fileName = file.name;
  
      const formData = new FormData();
      formData.append("thumbnail", file);
    }
  }
  onSubmit()
  {
     this.data ={
      firstName :this.sampleform.controls['firstName'].value,
      lastName :this.sampleform.controls['lastName'].value,
      phoneNo :this.sampleform.controls['phoneNo'].value,
      yearOfPassing :this.sampleform.controls['yearOfPassing'].value,
      // image :this.sampleform.controls['image'].value,
      experiences :this.sampleform.controls['experiences'].value,
      // male :this.sampleform.controls['male'].value,
      // female :this.sampleform.controls['female'].value,
      gender :this.sampleform.controls['gender'].value,
      address :this.sampleform.controls['address'].value,
      email :this.sampleform.controls['email'].value,
    }
    this.service.postdata(this.data).subscribe((res: any) => {
      console.log(res);

    })
    console.log(this.sampleform.value)
    
  }

}
