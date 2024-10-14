import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent, ButtonComponent, TextComponent } from '@fundamental-ngx/core';
import { CardModule } from '@fundamental-ngx/core/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';

@Component({
    selector: 'fd-interactive-card-example',
    templateUrl: './interactive-card-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CardModule, CommonModule, AvatarComponent, ButtonComponent, TextComponent, FundamentalNgxCoreModule, FundamentalNgxPlatformModule]
})
export class InteractiveCardExampleComponent {

    showDetails = false;
    showDetails2 = false;

    toggleDetails() {
        this.showDetails = !this.showDetails;
        console.log('showDetails:', this.showDetails); // Debug log
      }

      toggleDetails2() {
        this.showDetails2 = !this.showDetails2;
        console.log('showDetails:', this.showDetails2); // Debug log
      }

}