# Backbone.Cleanup

> Backbone cleanup plugin for views

## Getting Started

This is a Backbone clean plugin. After integrating this plugin with your application you can stop thinking about how and where to clean your views.

This Implementation Relies on the following libraries:

- Backbone (https://github.com/documentcloud/backbone)
- jQuery (http://jquery.com/)

More information can be found here: <a href="http://www.webdeveasy.com/backbone-cleanup" target="_blank">http://www.webdeveasy.com/backbone-cleanup</a>

## Usage

1. Extend your router from Backbone.CleanupRouter.
2. Each route in your router has a main view instance which is going to be displayed. After rendering this view, call this.markCurrentView(view); in order to let the plugin know which view is currently displayed.   
Router for example:

    ```
    var router = Backbone.CleanupRouter.extend({
        routes: {
            'page-a': 'pageA'
        },
        pageA: function() {
            var view = // create a view for page A
            this.markCurrentView(view);
        }
    });
    ```

3. Extend your views from Backbone.CleanupView.
4. Inside your view, each nested view must be marked with this.setNestedView(view);
5. Now all you have to do is to define a 'cleanup()' method in views you want to clean.
View for example:   

    ```
    var view = Backbone.CleanupView.extend({
        render: function() {
            // Render current view
            var nested = // create a nested view which is
                         // also instance of CleanupView
            this.$el.append(nested.$el);

            this.setNestedView(view);
        },
        cleanup: function() {
            // Cleanup current view only
        }
    });
    ```
* * *

Copyright (c) 2013 naorye