//
//  SecondViewController.swift
//  Daily Chores
//
//  Created by Jayadev Akkiraju on 3/30/16.
//  Copyright © 2016 Jayadev Akkiraju. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController, UITableViewDelegate {

    @IBOutlet weak var item: UITextField!
    
    
    @IBAction func addItem(sender: AnyObject) {
        toDoList.append(item.text!)
        
        item.text = ""
        
        NSUserDefaults.standardUserDefaults().setObject(toDoList, forKey: "toDoList")
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func touchesBegan(touches: Set<UITouch>, withEvent event: UIEvent?) {
        self.view.endEditing(true)
    }
    
    func textFieldShouldReturn(textField: UITextField!) -> Bool {
        
        item.resignFirstResponder()
        return true
    
    }


}

