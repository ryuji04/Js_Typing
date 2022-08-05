package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/typing2_controller")

public class Typing2Controller {

	@RequestMapping("/showStart")
	public String showStart() {

		return "start_view";
	}
	
	@RequestMapping("/gaming")
	public String gaming() {
		return "typing2";
	}
	

	@RequestMapping("/showResult")
	public String showResult(Model model, String score) {
		System.out.println("score:" + score);
		model.addAttribute("score", score);
		return "result_view";
	}
	
	@RequestMapping("/test")
	public String test() {
		return "test";
	}

}
